# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'
  namespace :api, format: 'json' do
    namespace :v1 do
      namespace :tasks do
        namespace :done do
          resources :week, only: :index
          resources :stars, only: :index
          resources :today, only: :index
          resources :inboxes, only: :index
        end

        resources :done, only: :index
        resources :week, only: :index
        resources :stars, only: :index
        resources :today, only: :index
        resources :inboxes, only: :index
      end
      resources :tasks
    end
  end

  get ':any_action', to: 'home#index'
end
