class AddIndexToSummoners < ActiveRecord::Migration
  def change
    add_index :summoners, :summoner_id
  end
end
