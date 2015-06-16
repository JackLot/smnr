Rails.application.routes.draw do

  mount Upmin::Engine => '/admin'
  root to: 'visitors#index'
  devise_for :users
  resources :users

  resources :summoners
  post 'summoners/create', as: "summoner_create"
end
