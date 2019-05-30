# frozen_string_literal: true

require 'rails_helper'

describe 'Api::V1::Tasks::TodayController', type: :request do
  describe 'GET#index' do
    let!(:task) { create(:task) }
    let!(:todays_limit_task1) { create(:todays_deadlined_task, title: 'todays deadlined task 1') }
    let!(:todays_limit_task2) { create(:todays_deadlined_task, title: 'todays deadlined task 2') }
    before do
      get api_v1_tasks_today_index_url
    end

    it 'returns 200 OK' do
      expect(response).to have_http_status(:ok)
    end

    it 'shows two records ( todays_limit_task1, todays_limit_task2 )' do
      res = JSON.parse(response.body)
      expect(res.size).to eq 2
    end

    it 'lines up task2, task1 in this order' do
      res = JSON.parse(response.body)
      expect(res.first['title']).to  eq todays_limit_task2.title
      expect(res.second['title']).to eq todays_limit_task1.title
    end
  end
end
