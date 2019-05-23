# frozen_string_literal: true

class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: %i[show update destroy]

  def index
    render json: Task.all.latest_ordered
  end

  def create
    @task = Task.new(task_params)
    render json: @task if @task.save
  end

  def show
    render json: @task
  end

  def update
    @task.update(task_params)
    render json: @task
  end

  def destroy
    @task.destroy
    head :no_content
  end

  private

  def task_params
    params.permit(:title, :body)
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
