Rails.application.routes.draw do
  
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :photos do 
    resources :comments
  end

  root 'photos#index'
  
  resources :profiles, only: [:show, :edit, :update] do
    resources :photos 
  end

  get 'top-photo', to: 'photos#top', as: 'top'
  get 'most-active-user', to: 'users#most_active_user', as: 'most_active_user'

  resources :photos do
    resources :collections
  end
  
  resources :collections
  
end
