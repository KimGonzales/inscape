Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :photos
  root 'photos#index'
  
  resources :users, only: [:show] do
    resources :photos, only: [:show, :new, :create, :index]
  end
  

end
