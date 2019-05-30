# frozen_string_literal: true

require 'rails_helper'

describe 'Api::V1::Tasks::InboxesController', type: :request do
  describe 'GET#index' do
    let!(:task) { create(:task) }
    let!(:starred_task) { create(:starred_task) }
    before do
      get api_v1_tasks_root_url
    end

    it 'returns 200 OK' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns 2 records' do
      res = JSON.parse(response.body)
      expect(res.size).to eq 2
    end

    it "matches @starred_task.text, @task.text with res.first['text'], res.second['text']" do
      res = JSON.parse(response.body)
      expect(res.first['title']).to eq starred_task.title
      expect(res.second['title']).to eq task.title
    end
  end
end
