Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	root 'pages#index'
	get '/services', to: 'pages#services', as: 'services'
	get '/blog', to: 'pages#blog', as: 'blog'
	get '/contact', to: 'pages#contact', as: 'contact'
end
