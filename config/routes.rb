Rails.application.routes.draw do
  devise_for :users

  resources :projects do
    member do
      get :finish
    end

    member do
      get :return
    end
  end

  resources :tasklists do
    put :sort
  end

  resources :tasks do
    put :sort
  end

  root "projects#index"
  resources :projects
  resources :tasks, only: [:index,:new,:create,:edit,:update]
end
