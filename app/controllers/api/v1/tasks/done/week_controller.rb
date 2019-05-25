# frozen_string_literal: true

class Api::V1::Tasks::Done::WeekController < ApplicationController
  def index
    render json: Task.done_lists.nextweek_deadlined.latest_deleted
  end
end
