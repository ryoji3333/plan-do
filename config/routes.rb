Rails.application.routes.draw do
  devise_for :users
  root "projects#index"
  resources :projects, only: [:index,:new,:create,:show]
  resources :tasks, only: [:index,:new,:create,:edit,:update]
end
