# frozen_string_literal: true

class Api::V1::Tasks::Done::InboxesController < ApplicationController
  def index
    render json: Task.done_lists.latest_deleted, status: :ok
  end
end
