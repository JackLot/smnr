require 'lol'

class Summoner < ActiveRecord::Base

  def self.get_or_create_summoner(name)

    summoner = Summoner.where("lower(name) = ?", "#{name.downcase}")

    if !summoner.any? then
      result = retrieve_summoner(name)[0]
      return Summoner.create(name: result.name, summoner_id: result.id)
    end
    
    return summoner[0]

  end

  def self.retrieve_summoner(name)
    client = Lol::Client.new Rails.application.secrets.riot_api_key, {region: "na"}
    return client.summoner.by_name name
  end

end
