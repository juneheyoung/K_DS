package com.example.ds.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
public class CommentDTO {
    private int commentId;
    private int boardId;
    private int commentWriter;
    private String commentContents;
    private Timestamp commentCreatedTime;
    private Timestamp commentUpdatedTime;
}
