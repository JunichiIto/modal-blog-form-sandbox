class RemoveContentFromBlogs < ActiveRecord::Migration[7.0]
  def up
    remove_column :blogs, :content
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
