# frozen_string_literal: true

class Api::V1::Tasks::Done::StarsController < ApplicationController
  def index
    render json: Task.done_lists.stars.latest_deleted, status: :ok
  end
end
