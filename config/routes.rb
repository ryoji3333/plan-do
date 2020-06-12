Rails.application.routes.draw do
  devise_for :users

  # resources :tasklists do
  #   put :sort
  # end

  resources :tasks do
    put :sort
  end

  root "projects#index"
  resources :projects, only: [:index,:new,:create,:show]
  resources :tasks, only: [:index,:new,:create,:edit,:update]
end
