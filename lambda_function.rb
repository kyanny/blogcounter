require 'json'
require 'net/http'
require "uri"

def lambda_handler(event:, context:)
    body = Net::HTTP.get URI("https://blog.kyanny.me/about")
    entries, days = body.scan(/<dd>(.*?)<\/dd>/).flatten.map(&:to_i)
    entries = entries - 1796
    days = days - 903
    {
        statusCode: 200,
        body: {
            entries: entries,
            days: days
        }
    }
end
