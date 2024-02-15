package com.example.ds.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
public class BoardDTO {
    private int boardId;
    private String boardContents;
    private Timestamp boardCreatedTime;
    private String boardTitle;
    private int boardHits;
    private int boardLike;
    private int boardWriter;
    private String userName;
//    private int boardCategory;
//    private int categoryId;


}

//		foreign key (boardWriter) references user_table(userId),
//		foreign key (boardCategory) references category_table(categoryId));