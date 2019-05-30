# frozen_string_literal: true

class Api::V1::Tasks::Done::TodayController < ApplicationController
  def index
    render json: Task.done_lists.todays_deadlined.latest_deleted, status: :ok
  end
end
