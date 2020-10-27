package com.sky.clo.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class JsonResponse {
    // Create a route node for adding items to
    private ObjectMapper mapper;
    private ObjectNode rootNode;

    public JsonResponse() {
        this.mapper = new ObjectMapper();
        this.rootNode = this.mapper.createObjectNode();
    }

    public void addLine(String key, String value) {
        this.rootNode.put(key, value);
    }

    public ObjectNode getRootNode() {
        return rootNode;
    }
}
