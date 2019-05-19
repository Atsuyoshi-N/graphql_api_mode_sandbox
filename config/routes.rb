# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'
  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :tasks
    end
  end
end
