package com.example.ds.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LikeDTO {

    private int userId;
    private int boardId;
    private String boardTitle;
}
