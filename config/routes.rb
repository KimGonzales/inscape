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

  get '/photos/:id/photo_data', to: 'photos#photo_data'

end
