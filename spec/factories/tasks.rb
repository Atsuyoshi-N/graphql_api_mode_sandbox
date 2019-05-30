# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    title { 'MyString' }
    body { 'MyText' }
  end

  factory :starred_task, class: Task do
    title { 'starred task' }
    is_starred { true }
  end

  factory :todays_deadlined_task, class: Task do
    title { 'todays deadlined task' }
    deadline { Date.today.end_of_day }
  end

  factory :nextweek_deadlined_task, class: Task do
    title { 'nextweek deadlined task' }
    deadline { 6.days.after.end_of_day }
  end

  factory :logically_deleted_task, class: Task do
    title { 'logically deleted task' }
    deleted_at { Time.zone.now }
  end
end
