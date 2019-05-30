# frozen_string_literal: true

class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :body
      t.datetime :deadline
      t.boolean :is_starred, null: false, default: false
      t.datetime :deleted_at, index: true
      t.timestamps
    end
  end
end
