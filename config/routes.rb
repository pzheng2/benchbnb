Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :bench, only: [:index, :create, :new, :show]
  end

end
