package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FlightResponseQuotes {
    @JsonProperty("MinPrice")
    private Float minPrice;

    @JsonProperty("OutboundLeg")
    private FlightResponseQuotesOutboundLeg outboundLeg;

    public Float getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(Float minPrice) {
        this.minPrice = minPrice;
    }

    public FlightResponseQuotesOutboundLeg getOutboundLeg() {
        return outboundLeg;
    }

    public void setOutboundLeg(FlightResponseQuotesOutboundLeg outboundLeg) {
        this.outboundLeg = outboundLeg;
    }
}
