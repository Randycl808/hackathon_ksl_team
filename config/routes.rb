Rails.application.routes.draw do
 namespace :api do
  resources :jobs do
  end
  get 'all', to: 'monsters#all'
  get 'monsters_all/:id', to: 'monsters#monsters_all'
  get 'items',  to:'items#items_all'
  resources :monsters do
    resources :items
end
end 
end 
