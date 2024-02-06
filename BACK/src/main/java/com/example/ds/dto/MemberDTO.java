package com.example.ds.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MemberDTO {
    private int userId;
    private String userEmail;
    private String userPass;
    private String userNickName;


}
