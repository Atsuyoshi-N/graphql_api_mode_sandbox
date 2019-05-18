# frozen_string_literal: true

class HomeController < ActionController::Base
  include ActionView::Layouts

  layout 'application'
  def index; end
end
