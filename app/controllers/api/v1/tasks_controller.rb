class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destory]
  
  def index
    render json: Task.all.latest_ordered
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task
    end
  end

  def show
    render json: @task
  end

  def update
    @task.update(task_params)
    render json: @task
  end

  def destory
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
