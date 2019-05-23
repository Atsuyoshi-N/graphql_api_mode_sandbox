# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    title { 'MyString' }
    body { 'MyText' }
  end
end
