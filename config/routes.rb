Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :photos
  root 'photos#index'
  
  resources :profiles, only: [:show] do
    resources :photos, only: [:new, :create, :index, :show, :edit, :update]
  end 

end
