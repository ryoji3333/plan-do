Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'   
  } 

  devise_scope :user do
    get "sign_in", :to => "users/sessions#new"
    get "sign_out", :to => "users/sessions#destroy" 
  end

  resources :projects do
    member do
      get :finish
    end

    member do
      get :finishtask
    end

    member do
      get :reversetask
    end

    member do
      get :finishtasks
    end

    member do
      get :return
    end

    member do
      post :newtask
    end 

    member do
      post :newtasklist
    end

    member do
      post :updatetask
    end

    member do
      post :updatetasklist
    end
  end

  resources :tasklists do
    put :sort
  end

  resources :tasks do
    put :sort
  end

  root "projects#index"
  resources :tasks, only: [:index,:new,:create,:edit,:update]
end
