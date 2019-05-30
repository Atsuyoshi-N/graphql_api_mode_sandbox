# frozen_string_literal: true

require 'rails_helper'

describe 'Api::V1::Tasks::StarsController', type: :request do
  describe 'GET#index' do
    let!(:task) { create(:task) }
    let!(:a_starred_task) { create(:starred_task, title: 'a starred task') }
    let!(:the_other_starred_task) { create(:starred_task, title: 'the other starred task') }
    before do
      get api_v1_tasks_stars_url
    end

    it 'returns 200 OK' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns 2 records( starred_task1, and starred_task2 )' do
      res = JSON.parse(response.body)
      expect(res.size).to eq 2
    end

    it 'lines up the_other_starred_task, a_starred_task in this order' do
      res = JSON.parse(response.body)
      expect(res.first['title']).to  eq the_other_starred_task.title
      expect(res.second['title']).to eq a_starred_task.title
    end
  end
end
