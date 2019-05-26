# frozen_string_literal: true

require 'rails_helper'

describe 'Api::V1::Tasks::WeekController', type: :request do
  describe 'GET#index' do
    let!(:task) { create(:task) }
    let!(:nextweek_limit_task1) { create(:nextweek_deadlined_task, title: 'nextweek deadlined task 1') }
    let!(:nextweek_limit_task2) { create(:nextweek_deadlined_task, title: 'nextweek deadlined task 2') }
    before do
      get api_v1_tasks_week_index_url
    end

    it 'returns 200 OK' do
      expect(response).to have_http_status(:ok)
    end

    it 'shows 2 records ( nextweek_limit_task1, nextweek_limit_task2 )' do
      res = JSON.parse(response.body)
      expect(res.size).to eq 2
    end

    it 'lines up task2, task1 in this order' do
      res = JSON.parse(response.body)
      expect(res.first['title']).to  eq nextweek_limit_task2.title
      expect(res.second['title']).to eq nextweek_limit_task1.title
    end
  end
end
