Rails.application.routes.draw do

  root to: 'static_pages#root'

  get '/api/vehicles/:vin', to: 'api/vehicles#show', defaults: { format: :json }
  patch '/api/vehicles/:vin', to: 'api/vehicles#update', defaults: { format: :json }

  namespace :api, defaults: { format: :json } do
    resources :vehicles, only: [:create]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
