Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get '/vehicles/:vin', to: 'vehicles#show'
    patch '/vehicles/:vin', to: 'vehicles#update'
    resources :vehicles, only: [:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
