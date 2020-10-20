package com.sky.clo.flight;

import java.util.Date;

public class Quote {
    private int QuoteID;
    private int MinPrice;
    private boolean Direct;
    private Date QuoteDateTime;

    public int getQuoteId() {
        return this.QuoteID;
    }

    public void setQuoteId(int QuoteID) {
        this.QuoteID = QuoteID;
    }

    public int getMinPrice() {
        return this.MinPrice;
    }

    public void setMinPrice(int MinPrice) {
        this.MinPrice = MinPrice;
    }

    public boolean getDirect() {
        return this.Direct;
    }

    public void setDirect(boolean Direct) {
        this.Direct = Direct;
    }

    public Date getQuoteDateTime() {
        return this.QuoteDateTime;
    }

    public void setQuoteDateTime(Date QuoteDateTime) {
        this.QuoteDateTime = QuoteDateTime;
    }

}
