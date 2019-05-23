# frozen_string_literal: true

class Api::V1::Tasks::WeekController < ApplicationController
  def index
    render json: Task.nextweek_deadlined
  end
end
