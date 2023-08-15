Rails.application.routes.draw do
  resources :blogs, only: %i[index new create edit update destroy]

  root "blogs#index"
end
