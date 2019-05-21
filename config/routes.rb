# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'
  namespace :api, format: 'json' do
    namespace :v1 do
      namespace :tasks do
        resources :inboxes, only: :index
      end
      resources :tasks
    end
  end
end
