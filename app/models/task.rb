# frozen_string_literal: true

class Task < ApplicationRecord
  scope :latest_ordered, -> { order(created_at: :desc) }
  scope :oldest_ordered, -> { order(created_at: :asc) }

  validates :title, presence: true
end
