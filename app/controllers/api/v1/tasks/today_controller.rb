# frozen_string_literal: true

class Api::V1::Tasks::TodayController < ApplicationController
  def index
    render json: Task.todays_deadlined.latest_ordered, status: :ok
  end
end
