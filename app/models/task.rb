# frozen_string_literal: true

class Task < ApplicationRecord
  scope :stars, -> { where(is_starred: true) }
  scope :done_lists, -> { unscoped.where.not(deleted_at: nil) } # paranoia has default_scope
  scope :latest_ordered, -> { order(created_at: :desc, id: :desc) }
  scope :oldest_ordered, -> { order(created_at: :asc, id: :asc) }
  scope :latest_deleted, -> { order(deleted_at: :desc) }
  scope :todays_deadlined, -> { where('deadline < ?', 1.days.after.beginning_of_day) }
  scope :nextweek_deadlined, -> { where('deadline < ?', 7.days.after.beginning_of_day) }

  validates :title, presence: true

  acts_as_paranoid
end
