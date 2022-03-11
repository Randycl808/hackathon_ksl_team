Rails.application.routes.draw do
 namespace :api do
  resources :monsters do
    resources :items
end
end 
end 
