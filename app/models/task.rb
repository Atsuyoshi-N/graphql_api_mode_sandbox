# frozen_string_literal: true

class Task < ApplicationRecord
  scope :stars, -> { where(is_starred: true) }
  scope :todays_deadlined, -> { where('deadline < ?', 1.days.after.beginning_of_day) }
  scope :nextweek_deadlined, -> { where('deadline < ?', 7.days.after.beginning_of_day) }
  scope :latest_ordered, -> { order(created_at: :desc) }
  scope :oldest_ordered, -> { order(created_at: :asc) }
  scope :done_lists, -> { unscoped.where.not(deleted_at: nil) } # paranoia has default_scope
  scope :latest_deleted, -> { order(deleted_at: :desc) }

  validates :title, presence: true

  acts_as_paranoid
end
