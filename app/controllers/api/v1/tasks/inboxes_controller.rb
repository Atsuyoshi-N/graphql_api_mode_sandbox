# frozen_string_literal: true

class Api::V1::Tasks::InboxesController < ApplicationController
  def index
    render json: Task.latest_ordered
  end
end
