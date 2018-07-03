Rails.application.routes.draw do
  
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :photos do 
    resources :comments
  end

  root 'photos#index'
  
  resources :profiles, only: [:show, :edit, :update] do
    resources :photos, only: [:new, :create, :index, :show, :edit, :update]
  end

  get 'best-photo', to: 'photos#best', as: 'best'

end
