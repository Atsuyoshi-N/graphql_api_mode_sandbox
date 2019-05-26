# frozen_string_literal: true

class Api::V1::Tasks::StarsController < ApplicationController
  def index
    render json: Task.stars.latest_ordered, status: :ok
  end
end
