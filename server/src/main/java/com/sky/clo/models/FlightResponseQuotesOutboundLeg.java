package com.sky.clo.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FlightResponseQuotesOutboundLeg {
    @JsonProperty("OriginId")
    private int originId;

    @JsonProperty("DestinationId")
    private int destinationId;

    public int getOriginId() {
        return originId;
    }

    public void setOriginId(int originId) {
        this.originId = originId;
    }

    public int getDestinationId() {
        return destinationId;
    }

    public void setDestinationId(int destinationId) {
        this.destinationId = destinationId;
    }
}
