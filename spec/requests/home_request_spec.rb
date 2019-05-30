# frozen_string_literal: true

require 'rails_helper'

describe 'HomeController', type: :request do
  describe 'GET#index' do
    before do
      get root_url
    end

    it 'returns 200 OK' do
      expect(response).to have_http_status(:ok)
    end
  end
end
